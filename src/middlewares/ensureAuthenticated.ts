import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
	sub: string;
}

export function ensureAuthenticated(
	request: Request,
	response: Response,
	next: NextFunction
) {

	const authToken = request.headers.authorization;

	if (!authToken) return response.status(401).end()

	const [, token] = authToken.split(' ')
	console.log(token)

	try {	
		const { sub } = verify(
			token,
			'a1afb48609e17aecf7e80842b162ba35'
		) as IPayload;
		request.user_id = sub;
		return next();
	} catch (err) {
		return response.status(401).end;
	} 
}