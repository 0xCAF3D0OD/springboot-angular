package com.spring.springbootangular;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class SpringbootAngularApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootAngularApplication.class, args);
	}
	@RestController
	public static class TestControllerTest {
		@GetMapping("/test")
		public String test() {
			return "Hello World i'm the best and you know it, right ?";
		}
	}
}
