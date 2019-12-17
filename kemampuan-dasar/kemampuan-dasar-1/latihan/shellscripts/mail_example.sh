#!/bin/bash
Recipient="nurhida10111@gmail.com"
Subject="Greeting"
Message="Welcome to our site"
'mail -s $Subject $Recipient <<< $Message'
