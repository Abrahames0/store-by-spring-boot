package com.dwi.users.ayma.backend_users_ayma.config.security.filter;

import javax.crypto.SecretKey;
import io.jsonwebtoken.Jwts;

public class TokenJwtConfig {
    public final static String PREFIX_TOKEN = "Bearer ";
    public final static String AUTHORIZATION = "Authorization";
    public final static String CONTENT_TYPE = "application/json ";
    public final static SecretKey SECRET_KEY = Jwts.SIG.HS256.key().build();
}
