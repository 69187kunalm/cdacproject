package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.Appliancedao;
import com.example.demo.entities.Appliance;
import com.example.demo.entities.Category;
import com.example.demo.entities.User;
import com.example.demo.repositories.ApplianceRepository;


@Service
public class ApplianceService {

	@Autowired
	ApplianceRepository arepo;
	
	@Autowired
	UserService us;
	
	@Autowired
	CategoryService cs;
	
	public List<Appliance>getAll()
	{
		return arepo.findAll();
	}
	
	public Appliance getone(int App_id)
	{
		Appliance c=null;
		Optional<Appliance>op=arepo.findById(App_id);
		try
		{
			c=op.get();
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return c;
	}
	public Appliance saveApp(Appliancedao a1)
	{
		User u=us.getOne(a1.getUser_id());
		Category c=null;
		if(a1.getCat_id()==1)
		{
			c=cs.getone(1);
		}
		else if(a1.getCat_id()==2)
		{
			c=cs.getone(2);
		}
		
		Appliance a=new Appliance(a1.getName(), a1.getDescription(), a1.getImage(), a1.getPricepermonth(), u, c);
	    return arepo.save(a);
	}
	
}
