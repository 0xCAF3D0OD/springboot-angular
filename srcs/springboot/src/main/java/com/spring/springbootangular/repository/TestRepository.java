package com.spring.springbootangular.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.springbootangular.entites.UserEntity;

public interface TestRepository extends JpaRepository<UserEntity, Integer> {
}
