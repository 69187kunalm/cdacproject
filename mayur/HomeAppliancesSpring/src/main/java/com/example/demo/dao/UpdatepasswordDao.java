package com.example.demo.dao;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UpdatepasswordDao {
	 private String email;
	    private String oldPassword;
	    private String newPassword;
}