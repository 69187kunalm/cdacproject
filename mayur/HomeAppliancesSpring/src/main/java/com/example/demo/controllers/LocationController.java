package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.LocationDao;
import com.example.demo.entities.Location;
import com.example.demo.services.LocationService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class LocationController {
        
	@Autowired
	LocationService ls;
	
	@PostMapping("/saveLocation")
	public Location SaveLoaction(@RequestBody LocationDao loc)
	{
		return ls.saveLocation(loc);
	}
	@PutMapping("updateLocation/{id}")
    public ResponseEntity<Location> updateAddress(@PathVariable int id, @RequestBody LocationDao updatedAddress) {
		Location updated = ls.updateLocation(id, updatedAddress);
        return ResponseEntity.ok(updated);
    }
}
