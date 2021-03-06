package com.devsuperior.dsdeliver.dto;

import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.devsuperior.dsdeliver.entities.Order;
import com.devsuperior.dsdeliver.enums.OrderStatus;

public class OrderDTO implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String address;
	private String latitude;
	private String longitude;
	private Instant moment;
	private OrderStatus status;
	private Double total;
	
	private List<ProductDTO> products = new ArrayList<>();
	
	public OrderDTO() {}

	public OrderDTO(Long id, String address, String latitude, String longitude, Instant moment, OrderStatus status,Double total) {
		this.id = id;
		this.address = address;
		this.latitude = latitude;
		this.longitude = longitude;
		this.moment = moment;
		this.status = status;
		this.setTotal(total);
	}
	
	public OrderDTO(Order obj) {
		id = obj.getId();
		address = obj.getAddress();
		latitude = obj.getLatitude();
		longitude = obj.getLongitude();
		moment = obj.getMoment();
		status = obj.getStatus();
		setTotal(obj.getTotal());
		products = obj.getProducts().stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public Instant getMoment() {
		return moment;
	}

	public void setMoment(Instant moment) {
		this.moment = moment;
	}

	public OrderStatus getStatus() {
		return status;
	}

	public void setStatus(OrderStatus status) {
		this.status = status;
	}
	
	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}

	public List<ProductDTO> getProducts() {
		return products;
	}
/*
	public void setProducts(List<ProductDTO> products) {
		this.products = products;
	}
*/

	
}
