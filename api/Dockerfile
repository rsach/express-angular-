FROM node:11.14.0


ADD ab.sh /ab.sh
RUN chmod 755 /ab.sh

RUN apt update || : &&  apt upgrade -yqq && apt install -yqq  g++ \
        python \
        make


CMD ["/ab.sh"]