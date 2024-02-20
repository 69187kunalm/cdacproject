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
	
	public List<Appliance> getApplianceVerified() {
		  return arepo.getVerifiedAppliance();
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
		
		Appliance a=new Appliance(a1.getName(), a1.getDescription(),a1.getPricepermonth(), u, c,0,0);
	    return arepo.save(a);
	}
	
	public boolean upload(int appid, byte[] photo) {
		if(arepo.uploadImage(appid, photo)==1) {
			return true;
		}
		return false;
	}
	
	public int deleteAppliance(int id)
	{
		try {
			arepo.deleteById(id);
			return 1;
			
		}
		catch (Exception e) {
			// TODO: handle exception
			return 0;
			
		}
	}
	public List<Appliance> searchAppliance(String name)
	{
		return arepo.searchApp(name);
	}
	public int verifyAppliance(int id) {
	    Appliance a = getone(id);
	    a.setIsverified(1);

	    // Save the updated Appliance entity
	    try {
	        arepo.save(a);
	        return 1;
	    } catch (Exception e) {
	        e.printStackTrace();
	        return 0;
	    }
	}
	
	public byte[] getImage(int id) {
		return arepo.getImage(id);
	}
	
	public List<Appliance> getAllVerifiedAppliances(){
		return arepo.getAllVerifiedAppliance();
	}

	public ApplianceService() {
		super();
	}

	public ApplianceService(ApplianceRepository arepo, UserService us, CategoryService cs) {
		this.arepo = arepo;
		this.us = us;
		this.cs = cs;
	}

	public ApplianceRepository getArepo() {
		return arepo;
	}

	public void setArepo(ApplianceRepository arepo) {
		this.arepo = arepo;
	}

	public UserService getUs() {
		return us;
	}

	public void setUs(UserService us) {
		this.us = us;
	}

	public CategoryService getCs() {
		return cs;
	}

	public void setCs(CategoryService cs) {
		this.cs = cs;
	}
	
	
	
	
}