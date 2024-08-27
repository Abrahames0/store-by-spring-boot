package com.dwi.users.ayma.backend_users_ayma.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

import com.dwi.users.ayma.backend_users_ayma.config.security.filter.JwsValidationfilter;
import com.dwi.users.ayma.backend_users_ayma.config.security.filter.JwtAuthenticationFilter;

import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.http.HttpMethod;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfig {
  @Autowired
  private AuthenticationConfiguration authenticationConfiguration;

  @Bean
  PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Bean
  AuthenticationManager authenticationManager() throws Exception {
    return authenticationConfiguration.getAuthenticationManager();
  }

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    return http
        .csrf(csrf -> csrf.disable())
        .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .addFilter(new JwtAuthenticationFilter(authenticationManager())) // el nuevo
        .addFilter(new JwsValidationfilter(authenticationManager())) // el nuevo
        .authorizeHttpRequests(authConfig -> {
          authConfig.requestMatchers(HttpMethod.GET, "/users").permitAll();
          authConfig.requestMatchers(HttpMethod.GET, "/users/{id}").hasAnyRole("USER", "ADMIN");
          authConfig.requestMatchers(HttpMethod.POST, "/users").hasAnyRole("ADMIN");
          authConfig.requestMatchers("/users/**").hasAnyRole("ADMIN");
          authConfig.anyRequest().authenticated();
        })
        .build();
  }
}
