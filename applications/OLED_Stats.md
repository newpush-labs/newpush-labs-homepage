# OLED_Stats

## Description
A quick way to display system stats on a 128x64 I2C OLED display.

## Notes
**Template created by Pi\-Hosted Series**  
**Check our Github page: [https://github.com/pi\-hosted/pi\-hosted](https://github.com/pi-hosted/pi-hosted)**  
  
**Official Webpage:** [https://www.the\-diy\-life.com/](https://www.the-diy-life.com/)  
**Official Docker Documentation:** <https://github.com/mklements/OLED_Stats_Docker>  
  
  
Run this command first to enable is2 communication! \\nsudo raspi\-config nonint do\_i2c 0\\nsudo /DietPi/dietpi/func/dietpi\-set\_hardware i2c enable \|\| sudo /boot/dietpi/func/dietpi\-set\_hardware i2c enable\\n

## Image
mklements/oled_stats:latest

## Categories
- Monitor
- Other

## Volumes
| Container | Bind |
|-----------|------|
| /etc/timezone | /etc/timezone |
| /etc/localtime | /etc/localtime |

## Environment Variables
| Name | Label | Default | Description |
|------|-------|---------|-------------|
| start | start displaying screen | ```8``` | `````` |
| end | end displaying screen | ```23``` | `````` |

