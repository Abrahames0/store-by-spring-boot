package com.dwi.users.ayma.backend_users_ayma.services.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dwi.users.ayma.backend_users_ayma.dto.UserDto;
import com.dwi.users.ayma.backend_users_ayma.models.entities.Role;
import com.dwi.users.ayma.backend_users_ayma.models.entities.User;
import com.dwi.users.ayma.backend_users_ayma.repositories.RoleRepository;
import com.dwi.users.ayma.backend_users_ayma.repositories.UserRepository;
import com.dwi.users.ayma.backend_users_ayma.services.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    // nuevo
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    @Transactional(readOnly = true)
    public List<User> findAll() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public User save(UserDto userDto) {
        Optional<Role> rolOptional = roleRepository.findByName("ROLE_USER");
        List<Role> roles = new ArrayList<>();
        if (rolOptional.isPresent()) {
            roles.add(rolOptional.orElseThrow());
        }
        User userDb = new User();
        userDb.setUsername((userDto.getUsername()));
        userDb.setPassword(passwordEncoder.encode(userDto.getPassword()));
        userDb.setEmail((userDto.getEmail()));
        userDb.setRoles(roles);

        return userRepository.save(userDb);
    }

    @Override
    public Optional<User> update(UserDto userDto, Long id) {
        Optional<User> user = this.findById((id));
        User userReturn = null;
        if (user.isPresent()) {
            User userdb = user.orElseThrow();
            userdb.setUsername(userDto.getUsername());
            userdb.setEmail(userDto.getEmail());

            userdb.setPassword(userDto.getPassword());

            userReturn = userRepository.save(userdb);
        }
        return Optional.ofNullable(userReturn);
    }

    @Override
    public void deleteById(Long id) {
        throw new UnsupportedOperationException("Unimplemented method 'deleteById'");
    }

}
