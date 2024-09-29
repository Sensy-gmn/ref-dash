"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "@/components/ui/pagination";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Separator } from "@radix-ui/react-select";
import {
    Activity,
    ArrowUpRight,
    Briefcase,
    ChevronLeft,
    ChevronRight,
    Copy,
    CreditCard,
    MoreVertical,
    TrendingUp,
    Truck,
    Users,
} from "lucide-react";
import Link from "next/link";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
export const description = "An area chart with a legend";

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
];
const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

export default function Dashboard() {
    return (
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    <Card x-chunk="dashboard-01-chunk-0">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Nombre d&apos;offres d&apos;emploi
                            </CardTitle>
                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">12</div>
                            <p className="text-xs text-muted-foreground">
                                +20.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-1">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                candidats
                            </CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+2350</div>
                            <p className="text-xs text-muted-foreground">
                                +180.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-2">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Entreprises
                            </CardTitle>
                            <CreditCard className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+12,234</div>
                            <p className="text-xs text-muted-foreground">
                                +19% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-3">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                exemple
                            </CardTitle>
                            <Activity className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+573</div>
                            <p className="text-xs text-muted-foreground">
                                +201 since last hour
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid gap-3 md:gap-8 lg:grid-cols-2 xl:grid-cols-4 ">
                    <Card>
                        <CardHeader>
                            <CardTitle>Area Chart - Legend</CardTitle>
                            <CardDescription>
                                Showing total visitors for the last 6 months
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={chartConfig}>
                                <AreaChart
                                    accessibilityLayer
                                    data={chartData}
                                    margin={{
                                        left: 12,
                                        right: 12,
                                    }}
                                >
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                        dataKey="month"
                                        tickLine={false}
                                        axisLine={false}
                                        tickMargin={8}
                                        tickFormatter={(value) =>
                                            value.slice(0, 3)
                                        }
                                    />
                                    <ChartTooltip
                                        cursor={false}
                                        content={
                                            <ChartTooltipContent indicator="line" />
                                        }
                                    />
                                    <Area
                                        dataKey="mobile"
                                        type="natural"
                                        fill="var(--color-mobile)"
                                        fillOpacity={0.4}
                                        stroke="var(--color-mobile)"
                                        stackId="a"
                                    />
                                    <Area
                                        dataKey="desktop"
                                        type="natural"
                                        fill="var(--color-desktop)"
                                        fillOpacity={0.4}
                                        stroke="var(--color-desktop)"
                                        stackId="a"
                                    />
                                    <ChartLegend
                                        content={<ChartLegendContent />}
                                    />
                                </AreaChart>
                            </ChartContainer>
                        </CardContent>
                        <CardFooter>
                            <div className="flex w-full items-start gap-2 text-sm">
                                <div className="grid gap-2">
                                    <div className="flex items-center gap-2 font-medium leading-none">
                                        Trending up by 5.2% this month{" "}
                                        <TrendingUp className="h-4 w-4" />
                                    </div>
                                    <div className="flex items-center gap-2 leading-none text-muted-foreground">
                                        January - June 2024
                                    </div>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>

                    <Card className="overflow-hidden xl:col-span-2">
                        <CardHeader className="flex flex-row items-start bg-muted/50">
                            <div className="grid gap-0.5">
                                <CardTitle className="group flex items-center gap-2 text-lg">
                                    Ebdhf1234567890
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                                    >
                                        <Copy className="h-3 w-3" />
                                        <span className="sr-only">
                                            Copy Order ID
                                        </span>
                                    </Button>
                                </CardTitle>
                                <CardDescription>
                                    Date: November 23, 2024
                                </CardDescription>
                            </div>
                            <div className="ml-auto flex items-center gap-1">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-8 gap-1"
                                >
                                    <Truck className="h-3.5 w-3.5" />
                                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                                        Track Order
                                    </span>
                                </Button>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            className="h-8 w-8"
                                        >
                                            <MoreVertical className="h-3.5 w-3.5" />
                                            <span className="sr-only">
                                                More
                                            </span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>
                                            Edit
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Export
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            close ticket
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 text-sm">
                            <div className="grid gap-3">
                                <div className="font-semibold">
                                    Order Details
                                </div>
                                <ul className="grid gap-3">
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">
                                            Glimmer Lamps x <span>2</span>
                                        </span>
                                        <span>$250.00</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">
                                            Aqua Filters x <span>1</span>
                                        </span>
                                        <span>$49.00</span>
                                    </li>
                                </ul>
                                <Separator className="my-2" />
                                <ul className="grid gap-3">
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">
                                            Subtotal
                                        </span>
                                        <span>$299.00</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">
                                            Shipping
                                        </span>
                                        <span>$5.00</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">
                                            Tax
                                        </span>
                                        <span>$25.00</span>
                                    </li>
                                    <li className="flex items-center justify-between font-semibold">
                                        <span className="text-muted-foreground">
                                            Total
                                        </span>
                                        <span>$329.00</span>
                                    </li>
                                </ul>
                            </div>
                            <Separator className="my-4" />
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-3">
                                    <div className="font-semibold">
                                        Shipping Information
                                    </div>
                                    <address className="grid gap-0.5 not-italic text-muted-foreground">
                                        <span>Liam Johnson</span>
                                        <span>1234 Main St.</span>
                                        <span>Anytown, CA 12345</span>
                                    </address>
                                </div>
                                <div className="grid auto-rows-max gap-3">
                                    <div className="font-semibold">
                                        Billing Information
                                    </div>
                                    <div className="text-muted-foreground">
                                        Same as shipping address
                                    </div>
                                </div>
                            </div>
                            <Separator className="my-4" />
                            <div className="grid gap-3">
                                <div className="font-semibold">
                                    Customer Information
                                </div>
                                <dl className="grid gap-3">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">
                                            Customer
                                        </dt>
                                        <dd>Liam Johnson</dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">
                                            Email
                                        </dt>
                                        <dd>
                                            <a href="mailto:">liam@acme.com</a>
                                        </dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">
                                            Phone
                                        </dt>
                                        <dd>
                                            <a href="tel:">+1 234 567 890</a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <Separator className="my-4" />
                            <div className="grid gap-3">
                                <div className="font-semibold">
                                    Payment Information
                                </div>
                                <dl className="grid gap-3">
                                    <div className="flex items-center justify-between">
                                        <dt className="flex items-center gap-1 text-muted-foreground">
                                            <CreditCard className="h-4 w-4" />
                                            Visa
                                        </dt>
                                        <dd>**** **** **** 4532</dd>
                                    </div>
                                </dl>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                            <div className="text-xs text-muted-foreground">
                                Updated{" "}
                                <time dateTime="2023-11-23">
                                    November 23, 2023
                                </time>
                            </div>
                            <Pagination className="ml-auto mr-0 w-auto">
                                <PaginationContent>
                                    <PaginationItem>
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            className="h-6 w-6"
                                        >
                                            <ChevronLeft className="h-3.5 w-3.5" />
                                            <span className="sr-only">
                                                Previous Order
                                            </span>
                                        </Button>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            className="h-6 w-6"
                                        >
                                            <ChevronRight className="h-3.5 w-3.5" />
                                            <span className="sr-only">
                                                Next Order
                                            </span>
                                        </Button>
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </CardFooter>
                    </Card>

                    <Card
                        className="xl:col-span-1"
                        x-chunk="dashboard-01-chunk-4"
                    >
                        <CardHeader className="flex flex-row items-center">
                            <div className="grid gap-2">
                                <CardTitle>
                                    Dernières offres d&apos;emploi
                                </CardTitle>
                                <CardDescription>
                                    posté récemment.
                                </CardDescription>
                            </div>
                            <Button asChild size="sm" className="ml-auto gap-1">
                                <Link href="#">
                                    Voir tout
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Titre</TableHead>
                                        <TableHead className="hidden md:table-cell">
                                            Type de contrat
                                        </TableHead>
                                        <TableHead className="text-right">
                                            Entreprise
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <div className="font-medium">
                                                Développeur React
                                            </div>
                                            <div className="hidden text-sm text-muted-foreground md:inline">
                                                CDI
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Badge
                                                className="text-xs"
                                                variant="outline"
                                            >
                                                CDI
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            Entreprise A
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <div className="font-medium">
                                                Back-end Developer
                                            </div>
                                            <div className="hidden text-sm text-muted-foreground md:inline">
                                                full-time
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Badge
                                                className="text-xs"
                                                variant="outline"
                                            >
                                                CDI
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            Entreprise B
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <div className="font-medium">
                                                Développeur Full-Stack
                                            </div>
                                            <div className="hidden text-sm text-muted-foreground md:inline">
                                                full-remote
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Badge
                                                className="text-xs"
                                                variant="outline"
                                            >
                                                CDI
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            Entreprise C
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <div className="font-medium">
                                                Développeur Node.js
                                            </div>
                                            <div className="hidden text-sm text-muted-foreground md:inline">
                                                mi-temps
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Badge
                                                className="text-xs"
                                                variant="outline"
                                            >
                                                CDI
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            Entreprise D
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
