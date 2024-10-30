package com.spring.springbootangular.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.springbootangular.entites.User;

public interface TestRepository extends JpaRepository<User, Integer> {
}
