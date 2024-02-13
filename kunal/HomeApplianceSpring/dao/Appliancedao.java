package com.example.demo.dao;

import lombok.AllArgsConstructor;

import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
public class Appliancedao {
	String name;
	String description;
	byte[] image;
	String pricepermonth;
	int user_id;
	int cat_id;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
	public String getPricepermonth() {
		return pricepermonth;
	}
	public void setPricepermonth(String pricepermonth) {
		this.pricepermonth = pricepermonth;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public int getCat_id() {
		return cat_id;
	}
	public void setCat_id(int cat_id) {
		this.cat_id = cat_id;
	}
	
}
