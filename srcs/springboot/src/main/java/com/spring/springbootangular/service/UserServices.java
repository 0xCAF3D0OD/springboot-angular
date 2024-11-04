package com.spring.springbootangular.service;

import com.spring.springbootangular.entites.UserEntity;
import com.spring.springbootangular.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServices {

    @Autowired
    private UserRepository userRepository;

    public UserServices(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void createUser(UserEntity client) {
        this.userRepository.save(client);
    }

}
