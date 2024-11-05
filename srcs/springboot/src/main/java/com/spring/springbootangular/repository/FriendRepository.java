package com.spring.springbootangular.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.springbootangular.entites.FriendEntity;
import org.springframework.stereotype.Repository;

public interface FriendRepository extends JpaRepository<FriendEntity, Integer> {
	boolean existsByFirstnameAndLastname(String firstname, String lastname);
}
