package com.spring.springbootangular.controller;

import com.spring.springbootangular.entites.UserEntity;
import com.spring.springbootangular.service.UserServices;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "user")
public class UserController {

    private UserServices userServices;

    public UserController(UserServices userServices) {
        this.userServices = userServices;
    }

    @ResponseStatus(value = HttpStatus.CREATED)
    @PostMapping(consumes = "application/json")
    public void createUser(@RequestBody UserEntity client) {
        this.userServices.createUser(client);
    }

}
