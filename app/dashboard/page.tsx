import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardPage() {
    return (
        <Tabs defaultValue="employees">
            <TabsList className="mb-4">
                <TabsTrigger value="employees">Employees stats</TabsTrigger>
                <TabsTrigger value="teams">Teams stats</TabsTrigger>
            </TabsList>
            <TabsContent value="employees">
            </TabsContent>
            <TabsContent value="teams">
            </TabsContent>
        </Tabs>
    );
}