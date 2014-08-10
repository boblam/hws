/**
 * Class KeyValue
 */
package com.common.bean;

/**
 * 
 * @author lewi
 *
 */
public class KeyValue<T, K> {
	
	/** key */
	private T key = null;
	/** value */
	private K value = null;
	
	/**
	 * 
	 */
	public KeyValue() {
		
	}
	
	/**
	 * 
	 * @param key
	 * @param value
	 */
	public KeyValue(T key, K value) {
		this.key = key;
		this.value = value;
	}
	
	/**
	 * 
	 * @return
	 */
	public T getKey() {
		return key;
	}
	
	/**
	 * 
	 * @param key
	 */
	public void setKey(T key) {
		this.key = key;
	}
	
	/**
	 * 
	 * @return
	 */
	public K getValue() {
		return value;
	}
	
	/**
	 * 
	 * @param value
	 */
	public void setValue(K value) {
		this.value = value;
	}
}
