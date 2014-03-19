
maxTemp=0

getMaxTemp()
{
	sourceString=`aticonfig --od-gettemperature`
	#echo $sourceString
	#echo ${sourceString:65:2}
	#echo `expr $sourceString : ".*"`
	currentTemp=`expr substr "$sourceString" 84 2`
	if [ $currentTemp \> $maxTemp ]
	then
		maxTemp=$currentTemp
	fi
	echo "max: $maxTemp" 
	#echo `expr substr "$sourceString" 84 2`
}

while true;
do
		
		echo "temp: $(aticonfig --od-gettemperature)"
		getMaxTemp
		echo "load: $(aticonfig --od-getclocks)"
		sleep 1	
		clear
done