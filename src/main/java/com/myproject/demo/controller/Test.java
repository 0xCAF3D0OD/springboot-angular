package com.myproject.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myproject.demo.entites.User;
import com.myproject.demo.service.TestService;

@RestController
@RequestMapping(path = "test")
public class Test {

	private TestService testService;

	public Test(TestService testService) {
		this.testService = testService;
	}

	@GetMapping(path = "string")
	public String getString() {

		return "taaaaass";
	}

	@GetMapping(path = "users")
	public List<String> getUsers() {
		return List.of("kevin", "tanguy");
	}

	@PostMapping(path = "add")
	public User adduser(@RequestBody User user) {
		return this.testService.adduser(user);
		// return user;
	}
}
