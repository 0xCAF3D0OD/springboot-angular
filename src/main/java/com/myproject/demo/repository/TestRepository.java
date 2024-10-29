package com.myproject.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myproject.demo.entites.User;

public interface TestRepository extends JpaRepository<User, Integer> {
}
