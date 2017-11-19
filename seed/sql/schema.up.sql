CREATE SEQUENCE pizza_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE "pizza" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	"price" json NOT NULL,
	"thumb" TEXT NOT NULL,
	CONSTRAINT pizza_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
