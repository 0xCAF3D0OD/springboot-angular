package com.spring.springbootangular.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.springbootangular.entites.FriendEntity;

public interface FriendRepository extends JpaRepository<FriendEntity, Integer> {

}
