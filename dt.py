from lib2to3.pgen2.pgen import DFAState
import pandas as pd  #libreria para tablas


BLACK = '\033[30m'
RED = '\033[31m'
GREEN = '\033[32m'
YELLOW = '\033[33m'
BLUE = '\033[34m'
MAGENTA = '\033[35m'
CYAN = '\033[36m'
WHITE = '\033[37m'
RESET = '\033[39m' '\033[30m'



def init():
    print(GREEN) # para poner color a la linea
    while True:
      try:
       factorservi = float(input("Ingresar factor de servico entre 1 y 3: "))
       break
      except ValueError:
       print(RESET)  #para que el color llegue a la linea anterior
       print(RED) 
       print("error ingrese un valor numerico")
       print(RESET)  
    
    if(factorservi >= 1 and factorservi <= 3):
        cal(factorservi)        
    else:
        print(RED) 
        print("El numero que ingreso supera el limite")
        print(RESET) 
        init()
        
def cal(parametro): 

    while True:
       try:
        caudal = float(input("Ingresar caudal: "))
        break
       except ValueError:
        print("El caudal debe ser un numero")
        cal(parametro)
       
        
         
        ####### corregir validacion
    
    while True:
      try:
       tentrada = float(input("Ingresar Temp entrada: "))
       break
      except ValueError:
          print("la temp  debe ser un numero")
          cal(parametro)
    while True:
      try:
       tsalida = float(input("Ingresar Temp salida: "))
       break
      except ValueError:
          print("la temp  debe ser un numero")
          cal(parametro)
    #tentrada = float(input("Ingresar Temp entrada: "))
    consta1 = 1000
    consta2 = 0.0003069
    tamanioDT = round(caudal*(tentrada - tsalida)*parametro*consta1*consta2)

    print("\n El distrito mide ", tamanioDT , '\n')
    chillers(tamanioDT)
    
def chillers(tdt):
    print("\n Tamanos de chillers Centrifuos y de Absorcion 500TR, 750TR, 1000TR \n")
    print("Favor indicar cantidad y lea con detenimiento \n")
    print("__________________________________________________________ \n")
    print(RESET) # para TERMINAR color a la linea

    print(YELLOW) # para poner color a la linea
    while True:
      try:
        c500 = int(input("Ingrerse cantidad para 500TR centrifugos: "))
        break
      except ValueError:
          print("el valor debe ser un numero")
    while True:
      try:
        c750 = int(input("Ingrerse cantidad para 750TR centrifugos: "))
        break
      except ValueError:
          print("el valor debe ser un numero")
    while True:
      try:
        c1000 = int(input("Ingrerse cantidad para 1000TR centrifugos: "))
        break
      except ValueError:
          print("el valor debe ser un numero")
    while True:
      try:
        aa500 = int(input("Ingrerse cantidad para 500TR Absorcion: "))
        break
      except ValueError:
          print("el valor debe ser un numero")
    while True:
      try:
        a750 = int(input("Ingrerse cantidad para 750TR Absorcion: "))
        break
      except ValueError:
          print("el valor debe ser un numero")
    while True:
      try:
        a1000 = int(input("Ingrerse cantidad para 1000TR Absorcion: "))
        break
      except ValueError:
          print("el valor debe ser un numero")
    
     
         
    print(RESET) # para poner color a la linea
    #Operacinn centrifugos
    totalc= (500*c500)+(750*c750)+(1000*c1000)
    totala= (500*aa500)+(750*a750)+(1000*a1000)
    totales = totala + totalc

    tmax = tdt + (tdt*0.5) #Se comprueba el tamano maximo de TR
    print(MAGENTA) # para poner color a la linea
    if totales<=tdt:
        print("\n Las tecnologias seleccionadas no suministran el tamano del DT \n")
        print("__________________________________________________________ \n")
        chillers(tdt)
    elif totales >= tmax:
        print("\n Las tecnologias seleccionadas superan el tope del DT")
        print("__________________________________________________________ \n")
        chillers(tdt)
    else:
        centrifugos(totalc)
        absorcion(totala)
        print(tdt)
        print(tmax)

def centrifugos(parametro1):
    # int se instancia para que salga enteros
    rp=int (parametro1*0.3190995427365	)
    g=int ((parametro1*511.13199046407)/1000)
    c=int (parametro1*0.0035174111853)*(1925000/0.88)	
    o=int (c*0.03)	
    	
    capex=int (parametro1*0.0035174111853)
    ft=int (capex*1000000)	
    e=int (capex*1700000)	
    b=int (capex*2000000)
    crearTablas('centri')
    #tabla de centrifugos
     #COLOR
    consta2=1000
    print(RED) #COLOR
    
    centrifu={
        "Energia":["Red_Publica","Microturbina a gas","Solar fotovoltaica","Energia eolica","Energia biomasa","TR de los chillers de adsorcion es:"],
        "Emisiones co2(TCo2 al mes)": [e, rp, b,ft,c,consta2],
        "Capex(Dolares  Megavatios)":[g,o, b, ft, capex,""],
        "Opex(Do-año)": [ft,rp,e, c,g,""],
             }
    df=pd.DataFrame(centrifu) # para llamar la libreria pd
#linea para exportar datos a excel, y carpeta donde se va a guardar
    df.to_excel ('C:/Users/john/Documents/universidad/semestre 7/linea de enfasis/centrifugos.xlsx',index=False)

    print(df) # impresion de tablaen consola
    print(RESET) #quitar color
 #tabla de absorcion
def absorcion(parametro2):
     g=int ((parametro2*511.13199046407)/1000)	
     c= int ((parametro2 * 0.0035174111853)*(1925000/0.88))		
     o= int(c*0.03)	
  		
     capex=int (parametro2*0.0035174111853)		
     ft= int( (capex*1000000)*1.015)
     b= int (capex*2000000 )
     crearTablas('abso')
     
     print(GREEN) # color
     #creacion de la tabla con la libreria panda
     TRc=1000
     absorciont={
    "Energia":["Microturbina a gas","Solar termica","Energia biomasa","TR de los chillers de absorcion es"],
    "Emisiones co2(TCo2 al mes)": [g,capex,b,TRc],
    "Capex(Dolares  Megavatios)":[g,capex,b,""],
    "Opex(Do-año)": [g, capex,b,""],
    }
     dt=pd.DataFrame(absorciont)
     print(dt)
#linea para exportar datos a excel
     dt.to_excel ('C:/Users/john/Documents/universidad/semestre 7/linea de enfasis/absorcion.xlsx', index=False)
     print(RESET)

def crearTablas(resp):
     if resp == 'centri':
        print("\n Tabla Centrifugos")	


     elif resp == 'abso':
        print("\n Tabla Absorcion")	
        
init()
