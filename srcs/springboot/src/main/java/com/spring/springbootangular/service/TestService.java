package com.spring.springbootangular.service;

import org.springframework.stereotype.Service;
import com.spring.springbootangular.entites.UserEntity;
import com.spring.springbootangular.repository.TestRepository;

@Service
public class TestService {

	private TestRepository testRepository;

	public TestService(TestRepository testRepository) {
		this.testRepository = testRepository;
	}

	public UserEntity adduser(UserEntity userEntity) {
		this.testRepository.save(userEntity);
		return userEntity;
	}
}
