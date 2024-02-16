package com.example.demo.dao;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Appliancedao {
	String name;
	String description;
	Double pricepermonth;
	int user_id;
	int cat_id;
}
