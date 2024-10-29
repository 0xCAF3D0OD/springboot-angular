package com.myproject.demo.service;

import org.springframework.stereotype.Service;
import com.myproject.demo.entites.User;
import com.myproject.demo.repository.TestRepository;

@Service
public class TestService {

	private TestRepository testRepository;

	public TestService(TestRepository testRepository) {
		this.testRepository = testRepository;
	}

	public User adduser(User user) {
		this.testRepository.save(user);
		return user;
	}
}
