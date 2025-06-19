export function extractErrorMessage(errorDate) {
	return typeof errorDate.message === 'object'
		? errorDate.message[0]
		: errorDate.message
}
