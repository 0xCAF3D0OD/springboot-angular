package com.spring.springbootangular.service;

import org.springframework.stereotype.Service;
import com.spring.springbootangular.entites.FriendEntity;
import com.spring.springbootangular.repository.FriendRepository;

import java.util.List;

@Service
public class FriendService {

	private FriendRepository friendRepository;

	public FriendService(FriendRepository friendRepository) {
		this.friendRepository = friendRepository;
	}

	public FriendEntity addfriend(FriendEntity friend) {
		this.friendRepository.save(friend);
		return friend;
	}

	public List<FriendEntity> getfriends() {
		return this.friendRepository.findAll();
	}

	public void deletefriend(String id) {
		Integer number = Integer.valueOf(id);
		this.friendRepository.deleteById(number);
	}
}
