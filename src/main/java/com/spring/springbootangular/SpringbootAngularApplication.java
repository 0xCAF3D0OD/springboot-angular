package com.spring.springbootangular;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.rmi.registry.Registry;

@SpringBootApplication
public class SpringbootAngularApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootAngularApplication.class, args);
	}
	@RestController
	public static class TestControllerTest {
		@GetMapping("/test")
		public String test() {
			return "Hello World";
		}
		@GetMapping("/test1")
		public String test1() {
			return "Hello";
		}
		@GetMapping("/test2")
		public String test2() {
			return "Hello wwewewe";
		}
	}
}
