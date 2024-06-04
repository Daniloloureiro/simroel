/*Pagina para parametros de simulacao*/
import * as React from "react"
import "./parametros.css"
import {Controller, useFormContext} from 'react-hook-form';

import { Textarea } from "@/components/ui/textarea"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

export default function Simulacao() {
    const {register,control,formState:{errors}}= useFormContext();
    
      const Calc_OSRN=[
        {value:'on',label:'on'},
        {value:'off',label:'off'},
      ];
    return (
        <main className="pt-6 pl-4 pr-4 pb-8">
            <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
            <div className="grid w-full items-start gap-6" >
                    <fieldset className="grid gap-6 rounded-lg border p-4">
                        <div className="grid gap-3">
                            <Label htmlFor="model">Insert simulation data</Label>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="N_simulations">Number of simulations</Label>
                                <Input className='input' {...register('N_simulations',{required:true})} type="number" placeholder="1" min="1" />
                                {errors.name && <p>item obrigatorio</p>}
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 ">
                            <div className="grid gap-3">
                                <Label htmlFor="Traffic lambda">Traffic lambda</Label>
                                <Input className='input' {...register('Traffic lambda',{required:true})} type="number" placeholder="1" min="1" />
                                {errors.name && <p>item obrigatorio</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <FormField
                                control={control}
                                name="Calc_OSRN"
                                render={({field})=>(
                                <FormItem>
                                <Label htmlFor="Calc_OSRN">Calculate OSRN (dB)</Label>
                                <Select onValueChange={field.onChange} defaultValue="Calc_OSRN">
                                    <FormControl>
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select  is on or off" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent >
                                        <SelectItem value="on" >On</SelectItem>
                                        <SelectItem value="off">Off</SelectItem>
                                    </SelectContent>
                                </Select>
                                </FormItem>
                                )}
                                />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                            <FormField
                                control={control}
                                name="Calc_Crosstalk"
                                render={({field})=>(
                                <FormItem>
                                <Label htmlFor="Calc_Crosstalk">Calculate Crosstalk(dB)</Label>
                                <Select onValueChange={field.onChange} defaultValue="Calc_Crosstalk">
                                    <FormControl>
                                    <SelectTrigger className='input'>
                                        <SelectValue placeholder="Select a is on or off" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent >
                                        <SelectItem value="on" >On</SelectItem>
                                        <SelectItem value="off">Off</SelectItem>
                                    </SelectContent>
                                </Select>
                                </FormItem>
                                )}
                                />
                            </div>
                            </div>
                        </div>
                    </fieldset>
                    
                    </div>
            </Card>
        </main>
    )
}
