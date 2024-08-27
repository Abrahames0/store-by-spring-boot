package com.dwi.users.ayma.backend_users_ayma.services;

import java.util.List;
import java.util.Optional;

import com.dwi.users.ayma.backend_users_ayma.dto.UserDto;
import com.dwi.users.ayma.backend_users_ayma.models.entities.User;

public interface UserService {
    List<User> findAll();

    Optional<User> findById(Long id);

    User save(UserDto userDto);

    Optional<User> update(UserDto userDto, Long id);

    void deleteById(Long id);

}
