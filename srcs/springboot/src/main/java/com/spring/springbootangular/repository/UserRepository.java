package com.spring.springbootangular.repository;

import com.spring.springbootangular.entites.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {
}