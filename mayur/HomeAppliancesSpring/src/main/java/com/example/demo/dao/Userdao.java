package com.example.demo.dao;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Userdao {
	String fname;
	String lname;
	String email;
	String password;
	String contact_no;
	int role;
}
