import { serve } from 'https://deno.land/std@0.175.0/http/server.ts'

async function handler(req: Request): Promise<Response> {
	const html = await Deno.readTextFile('index.html')
	return new Response(html, {
		headers: new Headers({
			'content-type': 'text/html',
		}),
	})
}

serve(handler)
