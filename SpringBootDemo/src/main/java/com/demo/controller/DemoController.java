package com.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.User;

@RestController
@RequestMapping("/users")
public class DemoController {
	
	@GetMapping("/")
    public ResponseEntity<List<User>> getAllUsers() {
		List<User> users = new ArrayList<>();
		users.add(new User("Jack"));
		users.add(new User("Mary"));
        return ResponseEntity.ok(users);
    }

}
