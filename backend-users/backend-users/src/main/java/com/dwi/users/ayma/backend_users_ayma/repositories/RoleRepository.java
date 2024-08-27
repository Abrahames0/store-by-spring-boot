package com.dwi.users.ayma.backend_users_ayma.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.dwi.users.ayma.backend_users_ayma.models.entities.Role;

public interface RoleRepository extends CrudRepository<Role, Long> {
    Optional<Role> findByName(String name);
}
