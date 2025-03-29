package com.demo.model;

import java.io.Serializable;

public class User implements Serializable {

	private static final long serialVersionUID = 1482055695347272535L;

	private final String name;

	public User(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

}