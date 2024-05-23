'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PersonStandingIcon } from "lucide-react";

const LoginPage = () => {

    return (
        <>
            <PersonStandingIcon size={50}/>
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>
                        Log in
                    </CardTitle>
                    <CardDescription>
                        Login to your SupportMe account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    Login form
                </CardContent>
                <CardFooter className="justify-between">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <small>Don't have an account?</small>
                    <Button asChild variant="outline" size="sm">
                        <Link href="/sign-up">
                            Sign up
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
};

export default LoginPage;
