package com.common.core.exception;

public class KnoodleException extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = -4535356599717560623L;

	/**
	 * Creates a new GroupException object.
	 */
	public KnoodleException() {

		super();
	}

	/**
	 * @param message
	 */
	public KnoodleException(final String message) {

		super(message);
	}

	/**
	 * @param message
	 * @param cause
	 */
	public KnoodleException(final String message, final Throwable cause) {

		super(message, cause);
	}

	/**
	 * @param cause
	 */
	public KnoodleException(final Throwable cause) {

		super(cause);
	}
}
