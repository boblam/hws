package com.common.core.exception;

public class DataBaseException extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = -4535356599717560623L;

	/**
	 * Creates a new GroupException object.
	 */
	public DataBaseException() {

		super();
	}

	/**
	 * @param message
	 */
	public DataBaseException(final String message) {

		super(message);
	}

	/**
	 * @param message
	 * @param cause
	 */
	public DataBaseException(final String message, final Throwable cause) {

		super(message, cause);
	}

	/**
	 * @param cause
	 */
	public DataBaseException(final Throwable cause) {

		super(cause);
	}
}
