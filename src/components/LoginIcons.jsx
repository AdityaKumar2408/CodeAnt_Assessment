import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import Github from '../assets/img/GitHub.png';
import Bitbucket from '../assets/img/BitBucket.png';
import AzuerDev from '../assets/img/AzureDev.jpg';
import GitLab from '../assets/img/GitLab.png';
import Key from '../assets/img/key.png';
import { useNavigate } from 'react-router-dom';

export function LoginIcons() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/dashboard');
    };

    return (
        <div className="my-5">
            <Tabs defaultValue="op1" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger className="data-[state=active]:bg-blue-500 data-[state=active]:text-white bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-xl" value="op1">SAAS</TabsTrigger>
                    <TabsTrigger className="data-[state=active]:bg-blue-500 data-[state=active]:text-white bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-xl" value="op2">Self Hosted</TabsTrigger>
                </TabsList>
                <hr className="border-t-2 border-gray-200 my-4" />
   <TabsContent value="op1">
                    <Card className="h-[300px] rounded-lg shadow-none border-none">
                        <CardContent className="h-full py-6 px-4">
                            <div className="flex flex-col justify-between h-full">
                                <Button onClick={handleClick} className="w-full h-10 space-x-2 flex justify-center items-center border border-gray-300 shadow-none rounded-xl">
                                    <img src={Github} alt="Githubub" className="w-5 h-5" />
                                    <span className="text-base">Sign in with Githubub</span>
                                </Button>
                                <Button onClick={handleClick} className="w-full space-x-2 flex justify-center items-center border border-gray-300 shadow-none rounded-xl">
                                    <img src={Bitbucket} alt="Bitbucketucket" className="w-5 h-5" />
                                    <span className="text-base">Sign in with Bitbucketucket</span>
                                </Button>
                                <Button onClick={handleClick} className="w-full space-x-2 flex justify-center items-center border border-gray-300 shadow-none rounded-xl">
                                    <img src={AzuerDev} alt="Azure DevOps" className="w-5 h-5" />
                                    <span className="text-base">Sign in with Azure Devops</span>
                                </Button>
                                <Button onClick={handleClick} className="w-full space-x-2 flex justify-center items-center border border-gray-300 shadow-none rounded-xl">
                                    <img src={GitLab} alt="GitLabab" className="w-5 h-5" />
                                    <span className="text-base">Sign in with GitLabab</span>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="op2">
                    <Card className="h-[300px] rounded-lg shadow-none border-none">
                        <CardContent className="h-full py-6 px-4">
                            <div className="flex flex-col items-center space-y-4">
                                <Button onClick={handleClick} className="w-full space-x-2 flex justify-center items-center border border-gray-300 shadow-none rounded-xl">
                                    <img src={GitLab} alt="GitLabab" className="w-5 h-5" />
                                    <span className="text-base">Self Hosted GitLababs</span>
                                </Button>
                                <Button onClick={handleClick} className="w-full space-x-2 flex justify-center items-center border border-gray-300 shadow-none rounded-xl">
                                    <img src={Key} alt="SSO" className="w-5 h-5" />
                                    <span className="text-base">Sign in with SSO</span>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
