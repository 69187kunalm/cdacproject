package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.LocationDao;
import com.example.demo.entities.Location;
import com.example.demo.entities.User;
import com.example.demo.repositories.LocationRepository;

@Service
public class LocationService {
	@Autowired
     LocationRepository lrepo;
	@Autowired
	UserService us;
    public Location saveLocation(LocationDao l1)
    {
    	User u=us.getOne(l1.getUser_id());
    	Location l=new Location(l1.getAddress(), l1.getPincode(), l1.getCity(), u);
    	return lrepo.save(l);
    }
}
