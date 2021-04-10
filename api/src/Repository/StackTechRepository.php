<?php

namespace App\Repository;

use App\Entity\StackTech;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method StackTech|null find($id, $lockMode = null, $lockVersion = null)
 * @method StackTech|null findOneBy(array $criteria, array $orderBy = null)
 * @method StackTech[]    findAll()
 * @method StackTech[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StackTechRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, StackTech::class);
    }

    // /**
    //  * @return StackTech[] Returns an array of StackTech objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?StackTech
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
