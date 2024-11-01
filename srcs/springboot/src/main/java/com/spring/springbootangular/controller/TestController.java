package com.spring.springbootangular.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.springbootangular.entites.UserEntity;
import com.spring.springbootangular.service.TestService;

@RestController
@RequestMapping(path = "usersTest")
public class TestController {

	private TestService testService;

	public TestController(TestService testService) {
		this.testService = testService;
	}

	@GetMapping(path = "string")
	public String getString() {

		return "taaaaass";
	}

//	@GetMapping(path = "users")
	@GetMapping
	public List<String> getUsers() {
		return List.of("kevin", "tanguy");
	}

	@PostMapping(path = "add")
	public UserEntity adduser(@RequestBody UserEntity userEntity) {
		return this.testService.adduser(userEntity);
		// return user;
	}
}
