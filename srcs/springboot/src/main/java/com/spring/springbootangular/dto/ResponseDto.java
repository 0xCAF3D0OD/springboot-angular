package com.spring.springbootangular.dto;

public class ResponseDto {
	private boolean success;
	private String message;

	public ResponseDto(boolean success, String message) {
		this.success = success;
		this.message = message;
	}

	public boolean getSucces() {
		return this.success;
	}

	public String getMessage() {
		return this.message;
	}
}
