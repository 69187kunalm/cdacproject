package com.example.demo.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.TransactionDao;
import com.example.demo.entities.Appliance;
import com.example.demo.entities.Transaction;
import com.example.demo.entities.User;
import com.example.demo.services.ApplianceService;
import com.example.demo.services.RoleService;
import com.example.demo.services.TransactionService;
import com.example.demo.services.UserService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class TransactionController {
	
	@Autowired
	TransactionService ts;
	
	@Autowired
	RoleService rs;

	@Autowired
	UserService us;
	
	@Autowired
	ApplianceService as;
	
	@PostMapping("/savetransaction")
	public Transaction saveTransaction(@RequestBody TransactionDao t) {
		User u1 = us.getOne(t.getDoneby());
		User u2 = us.getOne(t.getTouser());
		Transaction t1 = new Transaction(t.getDate(),u1,u2,t.getAmount(),t.getMode(),true,t.getStartdate(),t.getEnddate(),false,t.getApp_id());
		return ts.saveTransaction(t1);
	}
	
	
}
