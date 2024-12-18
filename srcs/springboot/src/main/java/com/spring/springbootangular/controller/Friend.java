package com.spring.springbootangular.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.spring.springbootangular.entites.FriendEntity;
import com.spring.springbootangular.service.FriendService;
import com.spring.springbootangular.dto.ResponseDto;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "friend")
public class Friend {

	private FriendService friendService;

	public Friend(FriendService friendService) {
		this.friendService = friendService;
	}

	@GetMapping("/")
	public List<FriendEntity> getFriend() {
		return this.friendService.getfriends();
	}

	@PostMapping("/creat")
	public ResponseDto CreatFriend(@RequestBody FriendEntity friend) {
		return this.friendService.addfriend(friend);
	}

	@DeleteMapping("/{id}")
	public ResponseDto adduser(@PathVariable("id") String id) {
		return this.friendService.deletefriend(id);
	}
}
