package com.spring.springbootangular.service;

import org.springframework.stereotype.Service;
import com.spring.springbootangular.entites.User;
import com.spring.springbootangular.repository.TestRepository;

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
