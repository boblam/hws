/**
 * Class ParamStrValue
 */
package com.common.bean;

/**
 * 
 * @author lewi
 *
 */
public class ParamStrValue {
	
	/** value content */
	private String value = null;

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
	
	public String toString() {
		if (this.value == null) {
			return super.toString();
		}
		return this.value;
	}
}
