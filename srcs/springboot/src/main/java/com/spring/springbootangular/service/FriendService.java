package com.spring.springbootangular.service;

import org.springframework.stereotype.Service;
import com.spring.springbootangular.entites.FriendEntity;
import com.spring.springbootangular.repository.FriendRepository;
import org.springframework.dao.DataAccessException;

import java.util.List;
import com.spring.springbootangular.dto.ResponseDto;

@Service
public class FriendService {

	private FriendRepository friendRepository;

	public FriendService(FriendRepository friendRepository) {
		this.friendRepository = friendRepository;
	}

	public ResponseDto addfriend(FriendEntity friend) {
		try {
			if (friendRepository.existsByFirstnameAndLastname(friend.getFirstname(), friend.getLastname())) {
				return new ResponseDto(false, "Ami deja enregistré");
			}
			this.friendRepository.save(friend);
			return new ResponseDto(true, "Ami enregistré avec succès");
		} catch (DataAccessException e) {
			return new ResponseDto(false, e.getMessage());
		}
	}

	public List<FriendEntity> getfriends() {
		return this.friendRepository.findAll();
	}

	public ResponseDto deletefriend(String id) {
		try {
			Integer number = Integer.valueOf(id);
			this.friendRepository.deleteById(number);
			return new ResponseDto(true, "Ami supprimé");
		} catch (DataAccessException e) {
			return new ResponseDto(false, e.getMessage());
		}
	}
}
